from flask import Flask

app = Flask(__name__)      

@app.route("/models")
def models():
    return {"models": ["WS-0001", "WS-0002", "WS-0003", "WS-0004"]} 

if __name__ == "__main__":
    app.run(debug=True)