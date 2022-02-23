// import {update_member_role_func_db} from '../dal/member_db'
const { v4: uuidv4 } = require('uuid')
const member_db = require('../dal/member_db')


const create_role = (ctx) => {
    const random_unique_id_for_invite_role = uuidv4()

    const { role,owner_name } = ctx.request.body
    const member_fields = { random_unique_id_for_invite_role, role,owner_name }

    ctx.status = 200
    ctx.body = member_fields

    member_db.saving_role_details(member_fields)

}


const display_all_members = async (ctx) => {
    const j = await member_db.getAllfunc();
    ctx.body = j
   
    return
}


const specific_member = async (ctx) => {
    const gok = await member_db.getByIdfunc(ctx.params.id);
    ctx.body = gok
    return

}

 const update_member_role =async (ctx) => {

    const random_unique_id_for_invite_role = uuidv4()
    const { role } = ctx.request.body
    const yoyo = { random_unique_id_for_invite_role, role ,owner_name}
    const koko =await member_db.update_member_role_func_db( ctx.params.id, role,owner_name)
   
    ctx.status = 200;
    ctx.body= {"response":"your data has been modified"}
   return 
}

const delete_member = async (ctx) => {

    const scr = await member_db.removeByIdfunc(ctx.params.id);
    ctx.body = scr
    ctx.status = 200;
    ctx.body = "successfully deleted"

    return
}


module.exports= { create_role, display_all_members, specific_member, update_member_role, delete_member}
