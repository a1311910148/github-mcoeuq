import _ from 'lodash';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await $fetch('/api/goods');
  console.log(data);
  const id = _.random(999, 999999999);
  return _.merge(query, { id: id }, { goods: data });
});
