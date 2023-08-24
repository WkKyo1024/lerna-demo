#!/usr/bin/env node

const pag1 = require("package-1")
const pag2 = require("package-2")

'use strict';


function core() {
  pag1()
  pag2()
  console.log('core!!!!!');
  return 'Hello from core';
}

core()
