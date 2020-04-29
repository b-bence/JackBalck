from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

disk_count = 6


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        global disk_count
        disk_count = int(request.form['disk-count'])
        return redirect('/game')
    #
    return render_template("home.html")


@app.route('/game')
def game():
    return render_template('game.html', disk_count=disk_count)


@app.route('/prosAndCons')
def pros_and_cons():
    pros_cons = ['teamwork', 'communication', 'choosing game', 'task allocation', 'new technologies']
    return render_template("pros-cons.html", pros_cons=pros_cons)


@app.route('/story')
def story():
    return render_template('story.html')


@app.route('/week')
def week():
    return render_template('week.html')


if __name__ == '__main__':
    app.run(
        debug=True
    )
