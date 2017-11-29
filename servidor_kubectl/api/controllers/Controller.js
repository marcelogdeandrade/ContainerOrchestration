import kubectl from '../models/Kubernetes'
import User from '../dbSchemas/User'
import { validateUser } from './schemas/addUser'

exports.getDeployment = function (req, res) {
  const body = req.body
  const username = body.username
  const password = body.password
  const query = User.findOne({ username: username })
  query.exec(function (err, user) {
    if (err){
      res.status(400)
      res.send(err)
    } else {
      if (!user){
        res.status(400)
        res.send(`Usuario ${username} não encontrado`)
      } else {
        user.comparePassword(password, function (err, isMatch) {
          if (err) throw err;
          if (!isMatch) {
            res.status(400)
            res.send('Senha errada')
          } else {
            kubectl.command(`describe deployment -l user=${username}`)
              .then(data => {
                res.status(200)
                res.send(data)
              })
              .catch(err => {
                res.status(400)
                res.send(err)
              })
          }
        });
      }
    }
  })

};

exports.adduser = function (req, res) {
  console.log("Called Add User")
  const body = req.body
  const validation = validateUser(body)
  if (validation){
    res.status(400)
    res.send(validation)
    return
  }
  const username = body.username
  const password = body.password
  const data = {username:username, password:password}
  const user = User.create(data, function (err, small) {
    if (err) {
      res.status(400)
      res.send(err);
    }
    else {
      res.status(200)
      res.send(small)
    }
  })
};

exports.addDeployent = function (req, res) {
  const body = req.body
  const username = body.username
  const password = body.password
  const query = User.findOne({username: username})
  query.exec(function (err, user) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      if (!user){
        res.status(400)
        res.send(`Usuario ${username} não encontrado`)
      } else {
        user.comparePassword(password, function (err, isMatch) {
          if (err) throw err;
          if (!isMatch) {
            res.status(400)
            res.send('Senha errada')
          } else {
            const command1 = `run node-web-app-${username} --image=docker.io/marcelogdeandrade/node-web-app --port=8081 --requests=cpu=200m --replicas=3 --labels=user=${username}`
            const command2 = `expose deployment node-web-app-${username} --type=LoadBalancer --name=node-web-app-${username}`
            const command3 = `autoscale deployment node-web-app-${username} --cpu-percent=50 --min=3 --max=5`

            const func1 = (() => kubectl.command(command1))
            const func2 = (() => kubectl.command(command2))
            const func3 = (() => kubectl.command(command3))

            const promises = [func1, func2, func3]
            const result = promises.reduce((p, fn) => p.then(fn), Promise.resolve())
            result
              .then(data => {
                res.status(200)
                res.send(`Serviço criado com sucesso. id:node-web-app-${username}`)
              })
              .catch(err => {
                res.status(400)
                res.send(err)
              })
            }
        });
      }
    }
  })
};

exports.deleteDeployment = function (req, res) {
  const body = req.body
  const username = body.username
  const password = body.password
  const query = User.findOne({ username: username })
  query.exec(function (err, user) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      if (!user) {
        res.status(400)
        res.send(`Usuario ${username} não encontrado`)
      } else {
        user.comparePassword(password, function (err, isMatch) {
          if (err) throw err;
          if (!isMatch) {
            res.status(400)
            res.send('Senha errada')
          } else {
            const command1 = `delete deployment node-web-app-${username}`
            const command2 = `delete service node-web-app-${username}`
            const command3 = `delete hpa node-web-app-${username}`

            const func1 = (() => kubectl.command(command1))
            const func2 = (() => kubectl.command(command2))
            const func3 = (() => kubectl.command(command3))

            const promises = [func1, func2, func3]
            const result = promises.reduce((p, fn) => p.then(fn), Promise.resolve())
            result
              .then(data => {
                res.status(200)
                res.send(`Serviço deletado com sucesso. id:node-web-app-${username}`)
              })
              .catch(err => {
                res.status(400)
                res.send(err)
              })
          }
        });
      }
    }
  })
};