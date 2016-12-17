# signal_coverage

Prerequisites:
python
virtualenv

Installation and configuration:

(Optional - but recommended)
VIRTUALENVWRAPPER
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
source /usr/local/bin/virtualenvwrapper.sh (Recommendation - add this line to you .bashrc file)

Creating virtualenv for app:
mkvirtualenv signal_coverage
workon signal_coverage
pip install -r requirements.txt

First run:
- go to dir where manage.py is located(... /signal_coverage/signal_coverage) and run listed command below:
./manage.py migrate
./manage.py createsuperuser
./manage.py collectstatic
./manage.py makemigrations
./manage.py migrate

Application start as regular django project with command:
./manage.py runserver
