import { motion } from 'framer-motion';

function MealPlanning() {
  const mealPlans = [
    {
      title: "Breakfast Ideas",
      options: [
        {
          name: "Sensory-Friendly Breakfast Bowl",
          ingredients: ["Gluten-free oatmeal", "Sliced banana", "Honey", "Cinnamon"],
          notes: "Consistent texture, naturally sweet"
        },
        {
          name: "Protein-Rich Start",
          ingredients: ["Scrambled eggs", "GF toast", "Avocado"],
          notes: "High in protein and healthy fats"
        }
      ]
    },
    {
      title: "Lunch & Dinner Options",
      options: [
        {
          name: "Colorful Plate",
          ingredients: ["Grilled chicken strips", "Sweet potato wedges", "Steamed broccoli"],
          notes: "Separated foods, different textures"
        },
        {
          name: "Comfort Meal",
          ingredients: ["GF pasta", "Protein-rich sauce", "Favorite vegetables"],
          notes: "Familiar textures and flavors"
        }
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {mealPlans.map((category, categoryIndex) => (
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
                <p><strong>Notes:</strong> {meal.notes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MealPlanning;