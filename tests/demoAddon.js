"use strict";
/* global it,describe */
let addon = require("..");
let assert = require("assert");

describe("Node js addon", function() {
    it("Calculate test", function() {
        let result = addon.add(3, 5);
        assert.equal(result, 8);
    });
});