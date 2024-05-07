"use strict";

var express = require("express");

var dotenv = require('dotenv');

var cors = require('cors');

var _require = require('body-parser'),
    json = _require.json;

var axios = require("axios");

dotenv.config();
var app = express();
app.use(json());
app.use(cors({
  origin: 'https://deopalculanphotography.com'
}));
var CLOUD_NAME = process.env.CLOUD_NAME;
var BASE_URL_GROUP = "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/resources/search?expression=folder:group&max_results=10&next_cursor");
var BASE_URL_ETC = "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/resources/search?expression=folder:etc&max_results=10&next_cursor");
var BASE_URL_COUPLES = "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/resources/search?expression=folder:couples&max_results=10&next_cursor");
var BASE_URL_PORTRAITS = "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/resources/search?expression=folder:portraits&max_results=10&next_cursor");
var auth = {
  username: process.env.API_KEY,
  password: process.env.API_SECRET
};
app.get('/group', function _callee(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(BASE_URL_GROUP, {
            auth: auth,
            params: {
              next_cursor: req.query.next_cursor
            }
          }));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", res.send(response.data));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/etc', function _callee2(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.get(BASE_URL_ETC, {
            auth: auth,
            params: {
              next_cursor: req.query.next_cursor
            }
          }));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", res.send(response.data));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/couples', function _callee3(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get(BASE_URL_COUPLES, {
            auth: auth,
            params: {
              next_cursor: req.query.next_cursor
            }
          }));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", res.send(response.data));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get('/portraits', function _callee4(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios.get(BASE_URL_PORTRAITS, {
            auth: auth,
            params: {
              next_cursor: req.query.next_cursor
            }
          }));

        case 2:
          response = _context4.sent;
          return _context4.abrupt("return", res.send(response.data));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
var hostname = "0.0.0.0";
var PORT = process.env.PORT || 7001;
app.listen(PORT, hostname, console.log("Server running on ".concat(PORT)));