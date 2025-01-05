import { motion } from 'framer-motion';

function MealPlans() {
  const meals = [
    {
      title: "Breakfast Ideas",
      options: [
        {
          name: "Antioxidant-Rich Breakfast Bowl",
          ingredients: ["Oatmeal", "Blueberries", "Walnuts", "Chia seeds"],
          calories: 350,
          nutrients: "High in omega-3, fiber, and antioxidants"
        },
        {
          name: "Eye-Health Smoothie",
          ingredients: ["Spinach", "Orange", "Carrot", "Greek yogurt"],
          calories: 250,
          nutrients: "Rich in vitamins A, C, and calcium"
        }
      ]
    },
    {
      title: "Lunch & Dinner Options",
      options: [
        {
          name: "Grilled Salmon Salad",
          ingredients: ["Salmon", "Mixed greens", "Avocado", "Olive oil dressing"],
          calories: 450,
          nutrients: "High in omega-3, healthy fats, and protein"
        },
        {
          name: "Colorful Veggie Stir-Fry",
          ingredients: ["Bell peppers", "Broccoli", "Sweet potato", "Tofu"],
          calories: 380,
          nutrients: "Rich in vitamins A, C, and plant protein"
        }
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Healthy Meal Ideas</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {meals.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="space-y-4">
              {category.options.map((meal, mealIndex) => (
                <motion.div
                  key={mealIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: mealIndex * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h4 className="font-semibold mb-2">{meal.name}</h4>
                  <p><strong>Ingredients:</strong> {meal.ingredients.join(", ")}</p>
                  <p><strong>Calories:</strong> {meal.calories}</p>
                  <p><strong>Key Nutrients:</strong> {meal.nutrients}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MealPlans;