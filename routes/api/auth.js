const express = require('express');
const {validation, ctrlWrapper, authenticate, upload} = require('../../middlewares');
const {schemas} =require("../../models/user");
const ctrl = require("../../controllers/auth")


const router = express.Router();

router.post("/singup", validation(schemas.registerSchema), ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", validation(schemas.verifyEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail));

router.post("/login", validation(schemas.registerSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/", authenticate, validation(schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription)
  );

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;