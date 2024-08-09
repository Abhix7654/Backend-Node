const dotenv = require('dotenv');
dotenv.config({ path: './Day8/.env' });

const path = require('path');
const router = require('./routes/indexRoutes');

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
