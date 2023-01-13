#! /bin/bash

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Company" \
  --authenticationDatabase admin \
	--type csv \
	--file ./company.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Grant Permission" \
  --authenticationDatabase admin \
	--type csv \
	--file ./grant-permission.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Permission" \
  --authenticationDatabase admin \
	--type csv \
	--file ./permission.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Position" \
  --authenticationDatabase admin \
	--type csv \
	--file ./position.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Profile" \
  --authenticationDatabase admin \
	--type csv \
	--file ./profile.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "Role" \
  --authenticationDatabase admin \
	--type csv \
	--file ./role.csv \
	--headerline

mongoimport \
  -h $DB_HOST -d $DB_NAME -u $DB_USER -p $DB_PASS -c "User" \
  --authenticationDatabase admin \
	--type csv \
	--file ./user.csv \
	--headerline
