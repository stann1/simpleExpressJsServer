var express = require('express');
var topicRoutes = express.Router();
const Topic = require('../models/topic');

const allTopics = [
  { id: 1, name: "React" },
  { id: 2, name: "Flux" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "Programming" }
];

/* GET topics. */
topicRoutes.get('/', function(req, res) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(allTopics);
});

/* GET single topic. */
topicRoutes.get('/:topic_id', function(req, res) {
  let topic = allTopics.find(t => t.id == req.params.topic_id);
  if(!topic){
    res.status(404).send({error: `Topic with id ${req.params.topic_id} not found`})
  }
  res.json(topic);
});

/* POST topic. */
topicRoutes.post('/', function(req, res){
  let newTopic = new Topic(req.body.name, "it is awsome");
  res.json({message: `Topic ${newTopic.name} created`});
});

/* GET single topic. */
topicRoutes.put('/:topic_id', function(req, res) {
  let topic = allTopics.find(t => t.id == req.params.topic_id);
  if(!topic){
    res.status(404).send({error: `Topic with id ${req.params.topic_id} not found`})
  }

  topic.name = req.body.name;

  const existingIndex = allTopics.findIndex(c => c.id === topic.id);
  allTopics.splice(existingIndex, 1, topic);

  res.json({ message: "Topic updated" });
});

module.exports = topicRoutes;