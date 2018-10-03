import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    //$.getJSON('/api/posts');
    return this.store.findAll('user'); //find all post model(we use ember g model post)
  }
});
