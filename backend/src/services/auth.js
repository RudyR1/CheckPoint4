const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashingOptions = {
      memoryCost: 2 ** 16,
      timeCost: 3,
      parallelism: 1,
    };
    const hpassword = await argon2.hash(password, hashingOptions);
    req.body.hpassword = hpassword;
    delete req.body.password;

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "Il y a eu un problème dans la validation du mot de passe",
    });
  }
};

module.exports = { hashPassword };
