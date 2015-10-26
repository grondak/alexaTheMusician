Given(/^the system knows about the following scales$/) do |music|
    @data = music.hashes
end

Then(/^the JSON response should be "([^"]*)"$/) do |notes|
  page = JSON.parse(@response)
  expect(page[0]["notes"]).to eq(notes)
end