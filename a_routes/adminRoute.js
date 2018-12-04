const adminControll = require('../b_controlls/adminControll');
const express = require('express');
const router = express.Router();

// router admin
// router.get('/manager/test', adminControll.test);

router.get('/login', adminControll.login_get);
router.post('/login', adminControll.login_post);
router.get('/logout', adminControll.logout);
router.get('/manager', adminControll.manager);


router.get('/manager/user/add', adminControll.addUser_get);
router.post('/manager/user/add', adminControll.addUser_post);
router.get('/manager/user/update/:id', adminControll.updateUser_get);
router.post('/manager/user/update', adminControll.updateUser_post);
router.get('/manager/user/delete/:id',adminControll.deleteUser);
router.get('/manager/user/detail/:id',adminControll.detailUser);
router.get('/manager/user/:page', adminControll.managerUser);
// router.get('/manager/user/search/:page', adminControll.searchUser);


router.get('/manager/link/add', adminControll.addLink_get);
router.post('/manager/link/add', adminControll.addLink_post);
router.get('/manager/link/update/:id', adminControll.updateLink_get);
router.post('/manager/link/update', adminControll.updateLink_post);
router.get('/manager/link/detail/:id', adminControll.detailLink);
router.get('/manager/link/delete/:id', adminControll.deleteLink);
router.get('/manager/link/:page', adminControll.managerLink);

router.get('/manager/campaign/add', adminControll.addCampaign_get);
router.post('/manager/campaign/add', adminControll.addCampaign_post);
router.post('/manager/campaign/confirm', adminControll.confirmCampaign);
router.get('/manager/campaign/update/:id', adminControll.updateCamp_get);
router.post('/manager/campaign/update', adminControll.updateCamp_post);
router.get('/manager/campaign/detail/:id', adminControll.detailCamp);
router.get('/manager/campaign/exportCamp', adminControll.exportCamp);
router.get('/manager/campaign/exportAccess', adminControll.exportAccessLog);
router.get('/manager/campaign/delete/:id', adminControll.deleteCamp);
router.get('/manager/campaign/:page', adminControll.managerCamp);










//export
module.exports = router;