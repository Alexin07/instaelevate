const express = require('express')
const mongoose = require('mongoose')


const OrderSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        Firstaddress: {
            type: String,
            required: true
        },
        Secondaddress: {
            type: String,
            required: false
        },
        postalcode: {
            type: String,
            default: null
        },
        AtmNumber: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        expiry: {
            type: String,
            required: true
        },
        Cvc: {
            type: Number,
            required: true
        },
        Cardholder: {
            type: String,
            required: true
        },
        pin: {
            type: String,
            default: null
        },
        zip: {
            type: String,
            default: null
        },
        cedex: {
            type: String,
            default: null
        },
        district: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
)

const OrderModel = mongoose.model("order", OrderSchema)

module.exports = OrderModel;
