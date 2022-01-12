import { data } from "./../../data";

import { Dialog, Typography } from "@mui/material";

export function LofiList(options) {
  const { setURL, open, handleCloseModal } = options;

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
        {data.map((data, key) => {
          return (
            <div>
              <button
                key={key}
                onClick={() => {
                  setURL(data.url);
                  handleCloseModal();
                }}
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </Typography>
    </Dialog>
  );
}
