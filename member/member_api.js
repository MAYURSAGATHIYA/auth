const { v4: uuidv4 } = require('uuid')
const member_db = require('../dal/member_db')


const create_role = (ctx) => {
    const random_unique_id_for_invite_role = uuidv4()

    const { role } = ctx.request.body
    const member_fields = { random_unique_id_for_invite_role, role }

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

const update_member_role = (ctx,next) => {
  console.log("dell1")
    const random_unique_id_for_invite_role = uuidv4()
    console.log("dell2")
    const { role } = ctx.request.body
    console.log("dell3")
    const yoyo = { random_unique_id_for_invite_role, role }
    console.log("dell4")
    const koko = member_db.update_member_role_func_db(ctx, ctx.params.id, role)
    console.log("dell5")
    const {expovars}=require('../dal/member_db')
    console.log("dell6")
    ctx.status = 200;
    ctx.body=expovars
    console.log("dell7")
    // ctx.body="succesfully modified"  

    return next()

}

const delete_member = async (ctx) => {

    const scr = await member_db.removeByIdfunc(ctx.params.id);
    ctx.body = scr
    ctx.status = 200;
    ctx.body = "successfully deleted"

    return
}


module.exports = { create_role, display_all_members, specific_member, update_member_role, delete_member}
