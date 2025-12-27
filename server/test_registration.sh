#!/bin/bash

BASE_URL="http://localhost:5000/api"

echo "Testing GC Registration API..."

# 1. Valid Registration
echo -e "\n1. Testing Valid Registration..."
curl -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Student",
    "rollNumber": "21001001",
    "email": "21001001@iitdh.ac.in",
    "gender": "Boy",
    "hostel": "Hostel 1",
    "sports": ["Cricket", "Football"]
  }'
echo ""

# 2. Invalid Email Domain
echo -e "\n2. Testing Invalid Email Domain..."
curl -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Bad Email",
    "rollNumber": "21001002",
    "email": "test@gmail.com",
    "gender": "Boy",
    "hostel": "Hostel 1",
    "sports": ["Cricket"]
  }'
echo ""

# 3. Invalid Hostel
echo -e "\n3. Testing Invalid Hostel..."
curl -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Bad Hostel",
    "rollNumber": "21001003",
    "email": "21001003@iitdh.ac.in",
    "gender": "Boy",
    "hostel": "Hostel 3",
    "sports": ["Cricket"]
  }'
echo ""

# 4. Sports Limit Exceeded (Boy > 3)
echo -e "\n4. Testing Sports Limit Exceeded (Boy)..."
curl -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Sports Fanatic",
    "rollNumber": "21001004",
    "email": "21001004@iitdh.ac.in",
    "gender": "Boy",
    "hostel": "Hostel 1",
    "sports": ["Cricket", "Football", "Basketball", "Volleyball"]
  }'
echo ""

# 5. Duplicate Registration
echo -e "\n5. Testing Duplicate Registration..."
curl -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Duplicate Student",
    "rollNumber": "21001001",
    "email": "21001001@iitdh.ac.in",
    "gender": "Boy",
    "hostel": "Hostel 1",
    "sports": ["Cricket"]
  }'
echo ""
