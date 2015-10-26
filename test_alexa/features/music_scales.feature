@racks
Feature: Scales
  As a musician
  I want a scale
  So that I can know the notes
 
Scenario: List of scales
 
Given the system knows about the following scales
| scale        | notes             |
| C            | C D E F G A B C   |
| E            | E F# G# A B C# D# |
| Amin         | A B C D E F G A   |
When the client requests GET http://localhost:8080/scales
Then response should be "200"
And the JSON response should be an array with 3 "scale" elements
And response should be JSON:
"""
[
  {"scale": "C", "notes" : "C D E F G A B C"},
  {"scale": "E", "notes" : "E F# G# A B C# D#"},
  {"scale": "Amin", "notes" : "A B C D E F G A"}
]
"""