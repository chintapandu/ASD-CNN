from flask import Flask,request,jsonify
from flask_cors import CORS
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import img_to_array, load_img
from keras_vggface.utils import preprocess_input

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

Height = 224
Width = 224
Version = 1


MODEL_PATH = "D:/SOWRI/ASD-CNN/last_model.hdf5"
model = load_model(MODEL_PATH)

def preprocess_input_new(img):
    # img = load_img(img_path, target_size=(Height, Width))
    img = img.resize((Height, Width))
    img_array = img_to_array(img)
    img_array = preprocess_input(img_array, version=2)
    return np.expand_dims(img_array, axis=0)

from PIL import Image
import io

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded!"}), 400

    image_file = request.files['image']
    
    image = Image.open(io.BytesIO(image_file.read()))
    
    # image_path = os.path.join("uploaded_image.jpg")
    # image_file.save(image_path)

    image_batch = preprocess_input_new(image)

    results = model.predict(image_batch, verbose=0)
    probabilities = results[0]
    print(probabilities)

    # os.remove(image_path)

    classes = ["Autistic", "Non-Autistic"]
    predicted_class_index = np.argmax(probabilities) 
    predicted_class = classes[predicted_class_index]
    confidence = probabilities[predicted_class_index]

    return jsonify({
        "prediction": predicted_class,
        "confidence": float(confidence)
    })

if __name__ == '__main__':
    app.run(debug=True)
