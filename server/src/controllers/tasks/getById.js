// export const getById = async ( req, res, next ) => {
//   const { id } = req.params;
//   try {
//     const { user_role, user_id } = res.locals;
//     if( user_id !== parseInt( id ) && user_role === UserRoles.landlord || user_role !== UserRoles.landlord ) {
//       return next( new HttpError( 'You have no permission.', 403 ) );
//     }

//     const foundedUser = await userService.getById( parseInt( id ) );
//     if( !foundedUser ) {
//       return next( new IdNotFound( parseInt( id ), 'User' ) );
//     }

//     return res.json( response( foundedUser ) );
//   } catch ( error ) {
//     next( error );
//   }
// };
