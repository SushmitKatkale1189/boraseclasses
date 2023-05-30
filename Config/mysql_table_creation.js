const categorie = `CREATE TABLE "categorie" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "c_name" VARCHAR(200) NOT NULL,
    "c_value" TEXT NOT NULL,
    "c_tag" VARCHAR(200) NOT NULL,
    PRIMARY KEY ("id"));`;

const state = `CREATE TABLE "state" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "s_name" VARCHAR(200) NOT NULL,
    "s_value" VARCHAR(200) NOT NULL,
    PRIMARY KEY ("id"));`;

const director = `CREATE TABLE "director" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "d_photo" VARCHAR(2000) NOT NULL,
    "d_info" TEXT NOT NULL,
    PRIMARY KEY ("id"));`;

const course = `CREATE TABLE "course" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "co_tag" VARCHAR(200) NOT NULL,
    "co_title" TEXT NOT NULL,
    "co_duration" INT NOT NULL,
    "co_rating" INT NOT NULL,
    "co_photo" VARCHAR(2000) NOT NULL,
    PRIMARY KEY ("id"));`;

const faculty = `CREATE TABLE "faculty" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "f_name" VARCHAR(200) NOT NULL,
    "f_tag" VARCHAR(200) NOT NULL,
    "f_jd" VARCHAR(200) NULL,
    "f_info" TEXT NOT NULL,
    "f_link" TEXT NULL,
    "f_photo" VARCHAR(2000) NOT NULL,
    PRIMARY KEY ("id"));`;

const gallery = `CREATE TABLE "gallery" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "g_image" VARCHAR(2000) NOT NULL,
    PRIMARY KEY ("id"));`;

const youtube = `CREATE TABLE "youtube" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "y_link" TEXT NOT NULL,
    PRIMARY KEY ("id"));`;

const testomonial = `CREATE TABLE "testomonial" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "te_name" VARCHAR(200) NOT NULL,
    "te_tag" VARCHAR(200) NOT NULL,
    "te_review" INT NOT NULL,
    "te_value" TEXT NOT NULL,
    "te_photo" VARCHAR(2000) NOT NULL,
    PRIMARY KEY ("id"));`;

const material = `CREATE TABLE "material" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "sm_name" VARCHAR(200) NOT NULL,
    "sm_tag" VARCHAR(200) NOT NULL,
    "sm_value" TEXT NOT NULL,
    "sm_pdf" VARCHAR(2000) NOT NULL,
    PRIMARY KEY ("id"));`;


const tag = `CREATE TABLE "tag" (
    "id" INT NOT NULL AUTO_INCREMENT,
    "t_name" VARCHAR(200) NOT NULL,
    "co_id" INT NOT NULL,
    PRIMARY KEY ("id"),
    INDEX "co_id_idx" ("co_id" ASC) VISIBLE,
    CONSTRAINT "co_id"
      FOREIGN KEY ("co_id")
      REFERENCES "course" ("id")
      ON DELETE NO ACTION
      ON UPDATE "CASCADE");`;




      