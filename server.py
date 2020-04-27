import backend.entities.Dealer
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # print('in post')
        player_count = request.form['player-count']
        print(player_count)
        return redirect('/game')
    return render_template('home.html')


@app.route('/game')
def game():
    return render_template('game.html')


if __name__ == '__main__':
    app.run(
        debug=True
    )
