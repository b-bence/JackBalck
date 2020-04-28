from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

disk_count = 0


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        global disk_count
        disk_count = int(request.form['disk-count'])
        return redirect('/game')
    return render_template('home.html')


@app.route('/game')
def game():
    return render_template('game.html', disk_count=disk_count)


if __name__ == '__main__':
    app.run(
        debug=True
    )
