const express = require('express');
const multer = require('multer');

let onboardingCompleted = false;

module.exports.load = async function (app, db) {
    const checkOnboardingStatus = async (req, res, next) => {
        try {
            // If the user is not logged in, redirect them to the login page or any other appropriate page
            if (!req.session.userinfo || !req.session.userinfo.email) {
                return res.redirect('/auth'); // Replace '/login' with your desired route
            }

            const userId = req.session.userinfo.email;
            const user = await db.get("account-", userId);

            // If user data is undefined or onboarding is not completed, redirect to onboarding
            if (!user || !user.onboardingCompleted) {
                if (req.path !== '/onboarding') {
                    return res.redirect('/onboarding');
                }
            } else {
                // If onboarding is completed, prevent the user from visiting the onboarding page
                if (req.path === '/onboarding') {
                    return res.redirect('/dashboard'); // Redirect to the dashboard or any other appropriate page
                }
            }

            // If onboarding is completed, set the onboardingCompleted flag to true
            if (user && user.onboardingCompleted) {
                onboardingCompleted = true;
            }

            next();
        } catch (error) {
            console.error("Error occurred while fetching onboarding status:", error);
            return res.status(500).json({ status: "error", message: "An error occurred while fetching onboarding status" });
        }
    };

    app.use(checkOnboardingStatus);

    app.post('/complete-onboarding', async (req, res) => {
        console.log("GATE 1");
        const { birthday, nickname, about, image } = req.body;
        try {
            const user = {
                birthday,
                nickname,
                about,
                image,
                onboardingCompleted: true,
            };

            if (!req.session.userinfo || !req.session.userinfo.email) {
                return res.status(403).json({ status: "error", message: "User info not available or incomplete" });
            }

            const userId = req.session.userinfo.email;
            await db.set("account-", userId, user);
            onboardingCompleted = true;
            return res.redirect('/dashboard'); // Redirect to the dashboard or any other appropriate page
        } catch (error) {
            console.error("Error occurred while completing onboarding:", error);
            return res.status(500).json({ status: "error", message: "An error occurred while completing onboarding" });
        }
    });
};
