//HANDLING DIFFERENT TYPES OF REQUEST
//POSTMAN TOOL
const express = require("express");
const res = require("express/lib/response");

const server = express();

//REQUEST HANDLING METHODS
const handleAllTypesOfRequests = (req, res) => {
  res.send("Response from server.use");
};

const handleProfilePutRequestType = (req, res) => {
  res.send("Responded to profile request with method of put");
};

const handleSignupDeleleType = (req, res) => {
  res.send("Responded to signup request with method of delete");
};

const handleWelcomePatchType = (req, res) => {
  res.send("Responded to welcome with method of patch");
};

const handleLoginGetType = (req, res) => {
  res.send("Hello this is the login page");
};

const middlewarefunction = (req, res, next) => {
  console.log("hello this is the middleware");

  //make some checks
  res.send("hi this is a middleware response");

  if (true) next();
  else {
  }
  //we throw an error
};
//GENERAL MIDDLEWARES COME BEFORE SPECIFYING ROUTES

// server.use(middlewarefunction);

//ROUTES SPECIFIC MIDDLEWARES

const loginRouteSpecificMiddleware = (req, res, next) => {
  console.log("login route middleware executed");
  next();
};
const profileRouteSpecificMiddleware = (req, res, next) => {
  console.log("profile route middleware executed");
  next();
};
const signupRouteSpecificMiddleware = (req, res, next) => {
  console.log("signup route middleware executed");
  next();
};
const welcomeRouteSpecificMiddleware = (req, res, next) => {
  console.log("welcome route middleware executed");
  next();
};

//ROUTES
server.post(
  "/profile",
  profileRouteSpecificMiddleware,
  handleAllTypesOfRequests
);
server.get("/login", loginRouteSpecificMiddleware, handleLoginGetType);
server.put(
  "/profile",
  profileRouteSpecificMiddleware,
  handleProfilePutRequestType
);
server.delete("/signup", signupRouteSpecificMiddleware, handleSignupDeleleType);
server.patch(
  "/welcome",
  welcomeRouteSpecificMiddleware,
  handleWelcomePatchType
);

server.listen(3003, () => {
  console.log("server is ready");
});
