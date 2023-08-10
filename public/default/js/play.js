// psure this isn't even being used - ItzScripts

document.addEventListener("DOMContentLoaded", function () {
    window.requestAnimationFrame(function () {
      var manager = new GameManager(4, KeyboardInputManager, HTMLActuator);
    });
  });
  
  
  function GameManager(size, InputManager, Actuator) {
    this.size         = size;
    this.inputManager = new InputManager;
    this.actuator     = new Actuator;
  
    this.startTiles   = 2;
  
    this.inputManager.on("move", this.move.bind(this));
    this.inputManager.on("restart", this.restart.bind(this));
  
    this.setup();
  }
  
  GameManager.prototype.restart = function () {
    this.actuator.restart();
    this.setup();
  };
  
  GameManager.prototype.setup = function () {
    this.grid         = new Grid(this.size);
  
    this.score        = 0;
    this.over         = false;
    this.won          = false;
  
    this.addStartTiles();
  
    this.actuate();
  };
  
  GameManager.prototype.addStartTiles = function () {
    for (var i = 0; i < this.startTiles; i++) {
      this.addRandomTile();
    }
  };
  
  GameManager.prototype.addRandomTile = function () {
    if (this.grid.cellsAvailable()) {
      var value = Math.random() < 0.9 ? 2 : 4;
      var tile = new Tile(this.grid.randomAvailableCell(), value);
  
      this.grid.insertTile(tile);
    }
  };
  
  GameManager.prototype.actuate = function () {
    this.actuator.actuate(this.grid, {
      score: this.score,
      over:  this.over,
      won:   this.won
    });
  };
  
  GameManager.prototype.prepareTiles = function () {
    this.grid.eachCell(function (x, y, tile) {
      if (tile) {
        tile.mergedFrom = null;
        tile.savePosition();
      }
    });
  };
  
  GameManager.prototype.moveTile = function (tile, cell) {
    this.grid.cells[tile.x][tile.y] = null;
    this.grid.cells[cell.x][cell.y] = tile;
    tile.updatePosition(cell);
  };

  GameManager.prototype.move = function (direction) {
    var self = this;
  
    if (this.over || this.won) return;
  
    var cell, tile;
  
    var vector     = this.getVector(direction);
    var traversals = this.buildTraversals(vector);
    var moved      = false;
  
    this.prepareTiles();
  
    traversals.x.forEach(function (x) {
      traversals.y.forEach(function (y) {
        cell = { x: x, y: y };
        tile = self.grid.cellContent(cell);
  
        if (tile) {
          var positions = self.findFarthestPosition(cell, vector);
          var next      = self.grid.cellContent(positions.next);
  
          if (next && next.value === tile.value && !next.mergedFrom) {
            var merged = new Tile(positions.next, tile.value * 2);
            merged.mergedFrom = [tile, next];
  
            self.grid.insertTile(merged);
            self.grid.removeTile(tile);
  
            tile.updatePosition(positions.next);
  
            self.score += merged.value;
  
            if (merged.value === 2048) self.won = true;
          } else {
            self.moveTile(tile, positions.farthest);
          }
  
          if (!self.positionsEqual(cell, tile)) {
            moved = true;
          }
        }
      });
    });
  
    if (moved) {
      this.addRandomTile();
  
      if (!this.movesAvailable()) {
        this.over = true;
      }
  
      this.actuate();
    }
  };
  
  GameManager.prototype.getVector = function (direction) {
    var map = {
      0: { x: 0,  y: -1 },
      1: { x: 1,  y: 0 },
      2: { x: 0,  y: 1 },
      3: { x: -1, y: 0 } 
    };
  
    return map[direction];
  };
  
  GameManager.prototype.buildTraversals = function (vector) {
    var traversals = { x: [], y: [] };
  
    for (var pos = 0; pos < this.size; pos++) {
      traversals.x.push(pos);
      traversals.y.push(pos);
    }
  
    if (vector.x === 1) traversals.x = traversals.x.reverse();
    if (vector.y === 1) traversals.y = traversals.y.reverse();
  
    return traversals;
  };
  
  GameManager.prototype.findFarthestPosition = function (cell, vector) {
    var previous;
  
    do {
      previous = cell;
      cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
    } while (this.grid.withinBounds(cell) &&
             this.grid.cellAvailable(cell));
  
    return {
      farthest: previous,
      next: cell
    };
  };
  
  GameManager.prototype.movesAvailable = function () {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable();
  };

  GameManager.prototype.tileMatchesAvailable = function () {
    var self = this;
  
    var tile;
  
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        tile = this.grid.cellContent({ x: x, y: y });
  
        if (tile) {
          for (var direction = 0; direction < 4; direction++) {
            var vector = self.getVector(direction);
            var cell   = { x: x + vector.x, y: y + vector.y };
  
            var other  = self.grid.cellContent(cell);
            if (other) {
            }
  
            if (other && other.value === tile.value) {
              return true;
            }
          }
        }
      }
    }
  
    return false;
  };
  
  GameManager.prototype.positionsEqual = function (first, second) {
    return first.x === second.x && first.y === second.y;
  };
  
  
  
  function Grid(size) {
    this.size = size;
  
    this.cells = [];
  
    this.build();
  }
  
  Grid.prototype.build = function () {
    for (var x = 0; x < this.size; x++) {
      var row = this.cells[x] = [];
  
      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }
  };
  
  Grid.prototype.randomAvailableCell = function () {
    var cells = this.availableCells();
  
    if (cells.length) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  };
  
  Grid.prototype.availableCells = function () {
    var cells = [];
  
    this.eachCell(function (x, y, tile) {
      if (!tile) {
        cells.push({ x: x, y: y });
      }
    });
  
    return cells;
  };
  
  Grid.prototype.eachCell = function (callback) {
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        callback(x, y, this.cells[x][y]);
      }
    }
  };

  Grid.prototype.cellsAvailable = function () {
    return !!this.availableCells().length;
  };
  
  Grid.prototype.cellAvailable = function (cell) {
    return !this.cellOccupied(cell);
  };
  
  Grid.prototype.cellOccupied = function (cell) {
    return !!this.cellContent(cell);
  };
  
  Grid.prototype.cellContent = function (cell) {
    if (this.withinBounds(cell)) {
      return this.cells[cell.x][cell.y];
    } else {
      return null;
    }
  };
  
  Grid.prototype.insertTile = function (tile) {
    this.cells[tile.x][tile.y] = tile;
  };
  
  Grid.prototype.removeTile = function (tile) {
    this.cells[tile.x][tile.y] = null;
  };
  
  Grid.prototype.withinBounds = function (position) {
    return position.x >= 0 && position.x < this.size &&
           position.y >= 0 && position.y < this.size;
  };
  
  
  function HTMLActuator() {
    this.tileContainer    = document.getElementsByClassName("tile-container")[0];
    this.scoreContainer   = document.getElementsByClassName("score-container")[0];
    this.messageContainer = document.getElementsByClassName("game-message")[0];
  
    this.score = 0;
  }
  
  HTMLActuator.prototype.actuate = function (grid, metadata) {
    var self = this;
  
    window.requestAnimationFrame(function () {
      self.clearContainer(self.tileContainer);
  
      grid.cells.forEach(function (column) {
        column.forEach(function (cell) {
          if (cell) {
            self.addTile(cell);
          }
        });
      });
  
      self.updateScore(metadata.score);
  
      if (metadata.over) self.message(false);
      if (metadata.won) self.message(true);
    });
  };
  
  HTMLActuator.prototype.restart = function () {
    this.clearMessage();
  };
  
  HTMLActuator.prototype.clearContainer = function (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
  
  HTMLActuator.prototype.addTile = function (tile) {
    var self = this;
  
    var element   = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    positionClass = this.positionClass(position);

    var classes = ["tile", "tile-" + tile.value, positionClass];
    this.applyClasses(element, classes);
  
    element.textContent = tile.value;
  
    if (tile.previousPosition) {
      window.requestAnimationFrame(function () {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y });
        self.applyClasses(element, classes);
      });
    } else if (tile.mergedFrom) {
      classes.push("tile-merged");
      this.applyClasses(element, classes);
  
      tile.mergedFrom.forEach(function (merged) {
        self.addTile(merged);
      });
    } else {
      classes.push("tile-new");
      this.applyClasses(element, classes);
    }
  
    this.tileContainer.appendChild(element);
  };
  
  HTMLActuator.prototype.applyClasses = function (element, classes) {
    element.setAttribute("class", classes.join(" "));
  };
  
  HTMLActuator.prototype.normalizePosition = function (position) {
    return { x: position.x + 1, y: position.y + 1 };
  };
  
  HTMLActuator.prototype.positionClass = function (position) {
    position = this.normalizePosition(position);
    return "tile-position-" + position.x + "-" + position.y;
  };
  
  HTMLActuator.prototype.updateScore = function (score) {
    this.clearContainer(this.scoreContainer);
  
    var difference = score - this.score;
    this.score = score;
  
    this.scoreContainer.textContent = this.score;
  
    if (difference > 0) {
      var addition = document.createElement("div");
      addition.classList.add("score-addition");
      addition.textContent = "+" + difference;
  
      this.scoreContainer.appendChild(addition);
    }
  };
  
  HTMLActuator.prototype.message = function (won) {
    var type    = won ? "game-won" : "game-over";
    var message = won ? "You win!" : "Game over!"
  
    this.messageContainer.classList.add(type);
    this.messageContainer.getElementsByTagName("p")[0].textContent = message;
  };
  
  HTMLActuator.prototype.clearMessage = function () {
    this.messageContainer.classList.remove("game-won", "game-over");
  };
  
  
  
  function KeyboardInputManager() {
    this.events = {};
  
    this.listen();
  }
  
  KeyboardInputManager.prototype.on = function (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  };
  
  KeyboardInputManager.prototype.emit = function (event, data) {
    var callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  };
  
  KeyboardInputManager.prototype.listen = function () {
    var self = this;
  
    var map = {
      38: 0, // Up
      39: 1, // Right
      40: 2, // Down
      37: 3, // Left
      75: 0, // vim keybindings
      76: 1,
      74: 2,
      72: 3
    };
  
    document.addEventListener("keydown", function (event) {
      var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
                      event.shiftKey;
      var mapped    = map[event.which];
  
      if (!modifiers) {
        if (mapped !== undefined) {
          event.preventDefault();
          self.emit("move", mapped);
        }
  
        if (event.which === 32) self.restart.bind(self)(event);
      }
    });
  
    var retry = document.getElementsByClassName("retry-button")[0];
    retry.addEventListener("click", this.restart.bind(this));
  
    var gestures = [Hammer.DIRECTION_UP, Hammer.DIRECTION_RIGHT,
                    Hammer.DIRECTION_DOWN, Hammer.DIRECTION_LEFT];
  
    var gameContainer = document.getElementsByClassName("game-container")[0];
    var handler       = Hammer(gameContainer, {
      drag_block_horizontal: true,
      drag_block_vertical: true
    });
    
    handler.on("swipe", function (event) {
      event.gesture.preventDefault();
      mapped = gestures.indexOf(event.gesture.direction);
  
      if (mapped !== -1) self.emit("move", mapped);
    });
  };
  
  KeyboardInputManager.prototype.restart = function (event) {
    event.preventDefault();
    this.emit("restart");
  };
  
  
  
  
  
  function Tile(position, value) {
    this.x                = position.x;
    this.y                = position.y;
    this.value            = value || 2;
  
    this.previousPosition = null;
    this.mergedFrom       = null;
  }
  
  Tile.prototype.savePosition = function () {
    this.previousPosition = { x: this.x, y: this.y };
  };
  
  Tile.prototype.updatePosition = function (position) {
    this.x = position.x;
    this.y = position.y;
  };
  
  
