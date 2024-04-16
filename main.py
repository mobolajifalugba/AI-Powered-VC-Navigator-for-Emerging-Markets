from flask import Flask, request, jsonify, render_template
import joblib

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Load the model
    model = joblib.load('log_reg.pkl')

    # Get the request data
    data = request.get_json()

    # Extract data from JSON payload
    city = data.get('city')
    total_funding = data.get('total_funding')
    year_founded = data.get('year_founded')
    debt_financing = data.get('debt_financing')
    venture_funding = data.get('venture_funding')
    seed_funding = data.get('seed_funding')
    angel_funding = data.get('angel_funding')
    grant = data.get('grant')
    convertible_note = data.get('convertible_note')
    private_equity = data.get('private_equity')
    undisclosed_funding = data.get('undisclosed_funding')
    market = data.get('market')
    country_code = data.get('country_code')
    funding_rounds = data.get('funding_rounds')
    first_funding_date = data.get('first_funding_date')
    last_funding_date = data.get('last_funding_date')
    first_funding_received = data.get('first_funding_received')
    second_funding_received = data.get('second_funding_received')
    third_funding_received = data.get('third_funding_received')
    fourth_funding_received = data.get('fourth_funding_received')
    fifth_funding_received = data.get('fifth_funding_received')
    sixth_funding_received = data.get('sixth_funding_received')

    # Predict with the model
    prediction = model.predict([[city, total_funding, year_founded, debt_financing, venture_funding, seed_funding, angel_funding, grant, convertible_note, private_equity, undisclosed_funding, market, country_code, funding_rounds, first_funding_date, last_funding_date, first_funding_received, second_funding_received, third_funding_received, fourth_funding_received, fifth_funding_received, sixth_funding_received]])[0]

    # Return prediction result
    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
