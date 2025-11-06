#!/bin/bash
echo "🌱 Seeding MongoDB with demo data..."
docker exec -i adaptive-mongo mongo adaptive_learning --eval '
db.users.insertMany([
  { name: "Alice", email: "alice@test.com", password: "1234" },
  { name: "Bob", email: "bob@test.com", password: "1234" }
]);
db.questions.insertOne({
  topic: "Math",
  text: "2 + 2 = ?",
  options: ["3", "4", "5"],
  correct: "4"
});
'
echo "✅ Seed complete!"
