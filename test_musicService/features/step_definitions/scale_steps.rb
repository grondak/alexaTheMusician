Given(/^the system knows about the following scales$/) do |music|
    @data = music.hashes
end

Then(/^the JSON response should be "([^"]*)"$/) do |notes|
  answer = JSON.parse(@response)
  expect(answer["notes"]).to eq(notes)
end