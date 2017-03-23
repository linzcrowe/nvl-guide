import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { UserResults } from './userResults.js';

export default deleteResult = new ValidatedMethod({
  name: 'userResults.deleteResult',
  validate: new SimpleSchema({}).validator(),
  run() {
    if (!this.userId) {
      throw new Meteor.Error('userResults.deleteResult.unauthorised',
        'User must be logged in');
    }

    const results = UserResults.find({ ownerUserId: this.userId });

    if (results.count() !== 1) {
      throw new Meteor.Error('userResults.deleteResult.noResult',
        'User must have one result to delete');
    }

    UserResults.remove(results.fetch()[0]._id);
  }
});