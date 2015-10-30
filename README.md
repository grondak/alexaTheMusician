# alexaTheMusician
Having Fun with Alexa Skills Kit

The project has two major components and is Test-Driven:
* musicService, a piece of JavaScript intended to run in node (perhaps in AWS or Heroku)
* musicSkill, a piece of JavaScript intended to exist in the AWA Lambda environment that invokes the musicService

The AWS Skill documentation is here: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function
If you follow these instructions, you can get a simple "what's your favorite color?" application running on Alexa.  Then you can see how to integrate the musicSkill code.

Please be careful of the directory naming because Ruby loves _ and JavaScript, she don't so much.
Acceptance Tests for the MusicService, written in Ruby/Cucumber:
(cd test_musicService/; cucumber)

"Build", test, run the MusicServer, gulp tasks:
(cd musicService; gulp)

Acceptance tests for the musicSkill Alexa Skill, in Ruby/Cucumber:
(cd test_musicSkill; cucumber)

"Build", test, run the musicSkill Alexa Skill, gulp tasks:
(cd musicSkill; gulp)
