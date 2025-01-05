# import os
# import glob
# import keras
# from keras_vggface.vggface import VGGFace
# from keras_vggface.utils import preprocess_input
# from keras.models import load_model
# from tensorflow.keras.utils import img_to_array, array_to_img
# import numpy as np
# import tensorflow as tf

# imgPath = 'D:\SOWRI\ASD-CNN\data\train\Autistic\0001.jpg'

# Height = 224
# Width  = 224
# BatchSize = 1
# Version = 1

# fullPath = 'D:/Mahesh/experiments/Autism/20200411-162232/weights/weights-improvement-38-0.9000.hdf5'
# fullPath = "D:\SOWRI\ASD-CNN\last_model.hdf5"

# print("Loading:", fullPath)
# model = load_model(fullPath)

# def preprocess_input_new(x):
#     img = preprocess_input(img_to_array(x), version = 2)
#     return array_to_img(img)


# predictGen = keras.preprocessing.image.ImageDataGenerator(
#         preprocessing_function=preprocess_input_new).flow_from_directory(
#         imgPath,
#         target_size=(Height, Width),
#         batch_size=BatchSize,
#         shuffle=False)

# results = model.predict_generator(predictGen, verbose=0)
# print(results)

import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import img_to_array, load_img
from keras_vggface.utils import preprocess_input

imgPath = r"D:\SOWRI\ASD-CNN\data\test\Non_Autistic\006.jpg"

Height = 224
Width = 224
Version = 1

fullPath = "D:/SOWRI/ASD-CNN/last_model.hdf5"
print("Loading:", fullPath)
model = load_model(fullPath)

def preprocess_input_new(img_path):
    img = load_img(img_path, target_size=(Height, Width))
    img_array = img_to_array(img)
    img_array = preprocess_input(img_array, version=2)
    return np.expand_dims(img_array, axis=0)

image_batch = preprocess_input_new(imgPath)

results = model.predict(image_batch, verbose=0)
print("Predictions:",results)

import matplotlib.pyplot as plt
import numpy as np
classes = ["Autistic", "Non-Autistic"]
probabilities = results[0]


plt.figure(figsize=(8, 5))
plt.bar(classes, probabilities, color=['skyblue', 'lightcoral'], alpha=0.8)
plt.ylim(0, 1)
plt.ylabel("Probability")
plt.title("Prediction Probabilities")

for i, v in enumerate(probabilities):
    plt.text(i, v + 0.02, f"{v:.2f}", ha='center', fontsize=12)
    
plt.show()