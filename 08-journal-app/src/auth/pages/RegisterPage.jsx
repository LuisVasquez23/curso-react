import { Button, Grid2, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router";
import { LoginPage } from "./LoginPage";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register">
        <form>
          <Grid2
            container
            spacing={2}
            size={12}
            sx={{ minWidth: 200, maxWidth: 450 }}
          >
            {/* nombre */}
            <Grid2 item="true" size={12}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
              />
            </Grid2>

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
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </Grid2>

            <Grid2 size={12} container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid2 item="true" size={12}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" size={12}>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={<LoginPage />} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    </>
  );
};
