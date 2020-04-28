from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        disk_count = request.form['disk-count']
        print('disk count: ' + disk_count)
        return redirect('/game')
    return render_template('home.html')


@app.route('/game')
def game():
    return render_template('game.html', disk_count=3, tower_count=3)


if __name__ == '__main__':
    app.run(
        debug=True
    )
