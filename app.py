from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404

@app.route('/servicos')
def servicos():
    return render_template("servicos.html")

@app.route('/bot')
def bot():
    return render_template("bot.html")

@app.route('/ajuda')
def ajuda():
    return render_template("ajuda.html")

@app.route('/sobre')
def sobre():
    return render_template("sobre.html")

if __name__ == '__main__':
    app.run(debug=True)
