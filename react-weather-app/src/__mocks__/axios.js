module.exports = {
  get: jest.fn((url) => Promise.resolve({ data: {}, outboundURL: url })),
};
