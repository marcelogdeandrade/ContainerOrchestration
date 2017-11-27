var mongoose = require('mongoose')
import { mongoUrl } from '../../credentials'

mongoose.connect(mongoUrl, { useMongoClient: true });
mongoose.Promise = global.Promise

export default mongoose