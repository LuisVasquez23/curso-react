import { Google } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { Link } from "react-router";
import { RegisterPage } from "./RegisterPage";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <form>
          <Grid2 container spacing={2} size={12} direction="column">
            {/* correo */}
            <Grid2 item="true" size={12}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid2>

            {/* password */}
            <Grid2 item="true" size={12}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
              />
            </Grid2>

            {/* login botton */}
            <Grid2 container item="true" spacing={2} size={12}>
              <Grid2 item="true" size={6}>
                <Button variant="contained" fullWidth>
                  Ingresar
                </Button>
              </Grid2>

              {/* google button */}
              <Grid2 item="true" size={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>

              {/* Link to register */}
              <Grid2 container direction="row" justifyContent="end" size={12}>
                <Link
                  component={<RegisterPage />}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una cuenta
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    </>
  );
};
