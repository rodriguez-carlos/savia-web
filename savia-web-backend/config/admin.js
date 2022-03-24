module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '741d1a1ae07978bd0c6b1b0ddb16f599'),
  },
});
