# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150810215323) do

  create_table "definitions", force: :cascade do |t|
    t.string   "term"
    t.string   "explanation"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "descriptions", force: :cascade do |t|
    t.integer  "risk_preference"
    t.string   "description"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "industries", force: :cascade do |t|
    t.string   "name"
    t.float    "eps"
    t.float    "pe"
    t.float    "pbook"
    t.float    "psales"
    t.float    "markcap"
    t.float    "peg"
    t.float    "book_value"
    t.float    "shares"
    t.float    "graham_number"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "oauths", force: :cascade do |t|
    t.string "token",  null: false
    t.string "secret", null: false
  end

  add_index "oauths", ["token"], name: "index_oauths_on_token"

  create_table "stocks", force: :cascade do |t|
    t.string   "ticker"
    t.string   "name"
    t.string   "industry"
    t.integer  "asi_component"
    t.float    "eps"
    t.float    "pe"
    t.float    "pbook"
    t.float    "psales"
    t.float    "markcap"
    t.float    "ask"
    t.float    "bid"
    t.float    "peg"
    t.float    "graham_number"
    t.float    "shares"
    t.float    "book_value"
    t.float    "eps_v_ind"
    t.float    "pe_v_ind"
    t.float    "pbook_v_ind"
    t.float    "psales_v_ind"
    t.float    "markcap_v_ind"
    t.float    "peg_v_ind"
    t.float    "graham_number_v_ind"
    t.float    "shares_v_ind"
    t.float    "book_value_v_ind"
    t.string   "info"
    t.float    "beta"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "uid",             null: false
    t.string   "handle",          null: false
    t.integer  "risk_preference"
    t.integer  "age"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["uid"], name: "index_users_on_uid"

end
