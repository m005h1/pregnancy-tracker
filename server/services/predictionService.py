from flask import Flask, request, jsonify
import numpy as np
from pytorch_tabnet.tab_model import TabNetClassifier
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins (for development)

# Load the trained TabNet model
model = TabNetClassifier()
model.load_model("tabnet_classifier.zip")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Assuming you send feature values as a list (like [val1, val2, ..., valN])
        features = np.array(data['features']).reshape(1, -1)

        # Predict class and probability
        prediction = model.predict(features)[0]
        probability = model.predict_proba(features)[0][1]  # Probability of class 1

        return jsonify({
            'prediction': int(prediction),
            'probability': float(probability)
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001)  