import { IconButton } from "@mui/material";
import { ImageGallery } from "../components";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../view/";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}

      <NoteView />
      <ImageGallery />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "primary.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
