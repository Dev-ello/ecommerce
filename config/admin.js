module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8e5a76b02d0aa977b305acdde357121'),
  },
});
