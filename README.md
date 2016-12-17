# signal_coverage

Prerequisites:
- python
- virtualenv

Installation and configuration:

VIRTUALENVWRAPPER (Optional - but recommended)
- pip install virtualenvwrapper
- export WORKON_HOME=~/Envs
- source /usr/local/bin/virtualenvwrapper.sh (Recommendation - add this line to you .bashrc file)

Creating virtualenv for app:
- mkvirtualenv signal_coverage
- workon signal_coverage
- pip install -r requirements.txt

First run:
- go to dir where manage.py is located(... /signal_coverage/signal_coverage) and run listed command below:
1. ./manage.py migrate
2. ./manage.py createsuperuser
3. ./manage.py collectstatic
4. ./manage.py makemigrations
5. ./manage.py migrate

Application start as regular django project with command:
- ./manage.py runserver
