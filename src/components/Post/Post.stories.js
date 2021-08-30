
import Post from './Post.js';

export default {
  title: 'components/Post',
  component: Post,
}

const Template = (args) => <Post {...args} />

export const Closed = Template.bind({})
Closed.args = {}

export const Open = Template.bind({})
Open.args = { open: true }