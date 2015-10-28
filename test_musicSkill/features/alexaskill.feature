Feature: AlexaTheMusician
  As a musician who uses Alexa on Echo
  I want Alexa to tell me a scalle
  So that I can know the notes

Background:
  Given the system knows about the following scales
  | scale        | notes             |
  | C            | C D E F G A B C   |
  | E            | E F# G# A B C# D# |
  | Amin         | A B C D E F G A   |
  
Scenario: Launch Request
 When the Alexa Skill Request Body
 """
 {
  "version": "1.0",
  "session": {
    "new": boolean,
    "sessionId": "string",
    "application": {
      "applicationId": "string"
    },
    "attributes": {
      "string": object
    },
    "user": {
      "userId": "string",
      "accessToken": "string"
    }
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "string",
    "timestamp": "string"
  }
}
"""

Then the response should be JSON:
"""
{
  "version": "string",
  "sessionAttributes": {
    "string": object
  },
  "response": {
    "outputSpeech": {
      "type": "SSML",
      "ssml": "<speak>Musician at your service. Ask me for the notes the key of C.</speak>"
    },
    "card": {
      "type": "Simple",
      "title": "Welcome to Alexa the Musician",
      "content": "Alexa the Musician knows musical keys, like C, E, or Amin."
    },
    "reprompt": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": "<speak>Musician at your service. Ask me for the notes the key of C.</speak>"
      }
    },
    "shouldEndSession": false
  }
}
"""

Scenario: Scale Request
 When the Alexa Skill Request Body
 """
 {
  "version": "1.0",
  "session": {
    "new": boolean,
    "sessionId": "string",
    "application": {
      "applicationId": "string"
    },
    "attributes": {
      "string": object
    },
    "user": {
      "userId": "string",
      "accessToken": "string"
    }
  },
  "request": {
  "type": "IntentRequest",
  "requestId": "string",
  "timestamp": "string",
  "intent": {
    "name": "ScaleRequestIntent",
    "slots": {
      "ScaleName": {
        "name": "ScaleName",
        "value": "C"
      }
    }
  }
}
}
"""

Then the response should be JSON:
"""
{
  "version": "string",
  "sessionAttributes": {
    "string": object
  },
  "response": {
    "outputSpeech": {
      "type": "SSML",
      "ssml": "<speak>The notes in the key of C are C, D, E, F, G, A, B, and C.</speak>"
    },
    "card": {
      "type": "Simple",
      "title": "The key of C",
      "content": "The notes in the key of C are C, D, E, F, G, A, B, and C"
    },
    "reprompt": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": "<speak>Do you want to know another scale?</speak>"
      }
    },
    "shouldEndSession": false
  }
}
"""

Scenario: SessionEnded Request
 When the Alexa Skill Request Body
 """
 {
  "version": "1.0",
  "session": {
    "new": boolean,
    "sessionId": "string",
    "application": {
      "applicationId": "string"
    },
    "attributes": {
      "string": object
    },
    "user": {
      "userId": "string",
      "accessToken": "string"
    }
  },
  "request": {
    "type": "SessionEndedRequest",
    "requestId": "string",
    "timestamp": "string",
    "reason": "string"
}

}
"""

Then the response should be JSON:
"""
{
  "version": "string",
  "sessionAttributes": {
    "string": object
  },
  "response": {
    "outputSpeech": {
      "type": "SSML",
      "ssml": "<speak>Goodbye.</speak>"
    },
    "card": {
      "type": "Simple",
      "title": "Thanks",
      "content": "Take care."
    },
    "reprompt": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": "<speak>Thanks a lot. Try again later.</speak>"
      }
    },
    "shouldEndSession": true
  }
}
"""