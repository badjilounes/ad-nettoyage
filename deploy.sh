npm run build:prod
cp -r server/* dist
git add -f dist/*
git commit -am 'deploy'
git push -f heroku master:master
